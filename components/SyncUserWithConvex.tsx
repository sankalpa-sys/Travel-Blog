'use client';
import React, {useEffect} from 'react';
import {useUser} from "@clerk/nextjs";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";

function SyncUserWithConvex() {
    const { user } = useUser();
    const updateUser = useMutation(api.users.updateUser)
    useEffect(()=> {
        if(!user) return;
        const syncUser = async() => {
            try{
                await updateUser({
                    userId: user.id,
                    name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
                    email: user.emailAddresses[0].emailAddress ?? "",
                })
            }catch (e) {
                console.error("Error syncing user",e);
            }
        }
        syncUser()
    },[user, updateUser])
    return (
        <div></div>
    );
}

export default SyncUserWithConvex;