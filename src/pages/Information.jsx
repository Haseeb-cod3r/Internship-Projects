import React, { useEffect } from "react";
import { ProgramsCard } from "../components/Programscard";
import { useOutletContext } from "react-router-dom";

export default function Information() {
      const {setAppear} = useOutletContext()
      useEffect(()=>{
            setAppear(false)
      },[])

  return (
    <div>
      <ProgramsCard
        title={"Information Technology"}
        description={
          "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology."
        }
        
      />
    </div>
  );
}
