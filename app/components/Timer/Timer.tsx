import { TimerInterface } from "@/app/interfaces/timerInterface"
import { useEffect, useState } from "react";


const Timer = (timer: TimerInterface) => {
    const [seconds, setSeconds] = useState(0);
    // Set Timer
    useEffect(() => {
        let interval: any = null;
        if (timer.isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + timer.incrementNumber);
            }, 1000);
        } else if (!timer.isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer.isActive]);

    useEffect(() => {
        setSeconds(0);
    }, [timer.reseted])

    return (
        <h2 className="mb-2">{timer.title}: <b>{seconds}</b> {timer.subTitle}</h2>
    );
}

export default Timer;