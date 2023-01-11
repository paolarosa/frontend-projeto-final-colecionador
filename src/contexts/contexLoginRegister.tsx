import { createContext, useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";

import { apiBase } from "../services/api";
import { AllUsers, Posts, User } from "../types";

interface iUserContext {
  loading: boolean;
  passwordEye: false | true;
  setPasswordEye: (showPassword: boolean) => void;
  loginRequisition: (data: iUserLoginProps) => Promise<void>;
  registerRequisition: (data: iUserRegisterProps) => Promise<void>;
  forumMessagesRequest: () => void;
  getAllUsersRequest: () => void;
  forumPostMessageRequest: (data: iUserPostProps) => Promise<void>;
  posts: Posts[];
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  allUsers: AllUsers[];
  userLikedPosts: any[];
  setUserLikedPosts: (post: any[]) => void;
  createNewColectionRequest: (data: iCreateColection) => Promise<void>;
}

interface iUserRegisterProps {
  name: string;
  email: string;
  password: string;
}

interface iUserLoginProps {
  email: string;
  password: string;
}

interface iUserPostProps {
  title: string;
  message: string;
}

interface iCreateColection {
  name: string;
  series: [];
}

export const LoginRegisterContext = createContext({} as iUserContext);

export const LoginRigisterProvider = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();
  const [userLikedPosts, setUserLikedPosts] = useState([] as object[]);

  const loadUser = async () => {
    const Token = localStorage.getItem("Token");

    if (!Token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const idUser = window.localStorage.getItem("@userID");

      const { data } = await apiBase.get(`/users/${idUser}`, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      setUser(data);
    } catch (error) {
      console.log(error);
      // window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    apiBase
      .patch(
        `/users/${user?.id}`,
        { likedPosts: userLikedPosts },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("Token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => setUser(resp.data));
  }, [userLikedPosts]);

  const loginRequisition = async (data: iUserLoginProps) => {
    console.log(data);

    try {
      setLoading(true);
      const response = await apiBase.post("login", data);

      localStorage.setItem("Token", response.data.accessToken);
      window.localStorage.setItem("@userID", response.data.user.id);

      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const registerRequisition = async (data: iUserRegisterProps) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await apiBase.post("register", data);
      console.log(response);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const forumMessagesRequest = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const response = await apiBase.get("/forum", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    }
  };

  const forumPostMessageRequest = async (data: iUserPostProps) => {
    const token = localStorage.getItem("Token");
    if (token) {
      const newData = {
        userId: user?.id,
        avatar: user?.avatar,
        name: user?.name,
        title: data.title,
        message: data.message,
      };
      try {
        console.log(data);
        const response = await apiBase.post("/forum", newData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        forumMessagesRequest();

      } catch (error) {
        console.log(error);
      }
    }
  };

  const getAllUsersRequest = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const response = await apiBase.get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAllUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createNewColectionRequest = async (data: iCreateColection) => {
    const token = localStorage.getItem("Token");
    if (token) {
      const newData = {
        userId: user?.id,
        name: data.name,
        series: [],
      };
      try {
        console.log(newData);
        const response = await apiBase.post("/colections", newData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createNewSerieRequest = async (data: iCreateColection) => {
    const token = localStorage.getItem("Token");
    if (token) {
      const newData = {
        // id: Colection?.id,
        name: data.name,
        colection: [],
      };
      try {
        console.log(newData);
        const response = await apiBase.post("/mybooks", newData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <LoginRegisterContext.Provider
      value={{
        loginRequisition,
        passwordEye,
        setPasswordEye,
        registerRequisition,
        loading,
        forumMessagesRequest,
        posts,
        user,
        setUser,
        getAllUsersRequest,
        allUsers,
        forumPostMessageRequest,
        userLikedPosts,
        setUserLikedPosts,
        createNewColectionRequest,
      }}
    >
      <Outlet />
    </LoginRegisterContext.Provider>
  );
};
