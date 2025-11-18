import React from 'react'
import type { UserContactType } from '../types/UserContact'
import UserContact from './UserContact'

const ContactDisplay = () => {
    const User: UserContactType = {
     id: 1,
    name: "John Doe",
    age: 30,
    dob: new Date("1993-05-15"),
    active: true,
    salary: 50000,
    idFiler: false,
    }


  return (
    <div>ContactDisplay

        <UserContact user= {User}/>
    </div>
  )
}

export default ContactDisplay