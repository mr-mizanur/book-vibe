import React from 'react';
import Navbar from '../components/Shard/Navbar/Navbar';
import { Outlet } from 'react-router';

const MailLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default MailLayout;