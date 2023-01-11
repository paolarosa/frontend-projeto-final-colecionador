import { createContext, useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { apiBase } from "../../services/api"
import { LoginRegisterContext } from "../contexLoginRegister"

import { iForum, iUserDetail } from "./forumInterface"

export const forumContext = createContext({} as iForum)

export const ForumProvider = () => {
    const { user, setUser, patchEffectKey, favorites, setFavorites } = useContext(LoginRegisterContext)

    useEffect(() => {
        if (patchEffectKey){
            apiBase.patch(`/users/${user?.id}`,{ followed: favorites },{
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem("Token")}`,
                  "Content-Type": "application/json",
                },
              }
              )
              .then((resp) => setUser(resp.data));
            }
    }, [favorites])

    return (
        <forumContext.Provider value={{}}>
            <Outlet />
        </forumContext.Provider>
    )
}