import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus ] = useState(true);

    useEffect(() => {
         // check if offline
        window.addEventListener("offline", function(){
            setOnlineStatus(false);
        })

        // check if online
        window.addEventListener("online", function(){
            setOnlineStatus(true);
        })

    }, [])

    return onlineStatus
}

export default useOnlineStatus;