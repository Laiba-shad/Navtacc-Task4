import React, { useState } from "react";
import type { UserContactType } from "../types/UserContact";
interface UserContactProps {
  user: UserContactType;
}

const UserContact = ({ user }: UserContactProps) => {
  const [active, setActive] = useState(false);

  
    const taxRate = 0.11;
    const netSalary = user.salary * (1 - taxRate)
  

  return (
    <div className="p-10 w-96 max-w-md rounded  shadow bg-gray-300 relative font-semibold">
      <div className="flex mb-10 flex-col ">
        <h1>{user.name}</h1> 
        <span>Id: {user.id}</span>
        <span className="absolute right-4">Age:{user.age}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <span>Date of Birth: {user.dob.toLocaleDateString()}</span>

        <span>Gross Salary : {user.salary}</span>
        <span>Net Salary(after 11% tax): 
            {
                active ? <span>{netSalary}</span> : <span>{user.salary}</span>
            }
        </span>

        <span
          className={`p-1 rounded ${active ? "bg-blue-400" : "bg-red-300 "}`}
        >
          {" "}
          {active ? "Active" : "InActive"}
          {<span>{active ? "" : ""}</span>}
        </span>

      </div>
      <div className="flex gap-2">
        <span>Is Filer</span>
        <button
  onClick={() => setActive(!active)}
  className={`w-14 h-8 flex items-center rounded-full transition-colors duration-300 cursor-pointer
    ${active ? "bg-blue-500 justify-end" : "bg-gray-400 justify-start"}`}
>
  <div className="w-6 h-6 bg-white shadow-md rounded-full transform transition-transform duration-300"></div>
</button>



        <span className="absolute right-3">{user.dob.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default UserContact;
