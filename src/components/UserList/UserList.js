import React from "react";
import styles from './UserList.module.css';

const User =(props)=>{

    return (<div className={styles['user']}>
        <label>{props.name}</label>
        <label>{props.age} (Years Old)</label>
    </div>);
}

export default User;