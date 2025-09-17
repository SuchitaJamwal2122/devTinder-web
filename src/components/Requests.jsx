import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestSlice';

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();
    
    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {withCredentials: true});
            dispatch(addRequests(res.data.data));
        }
        catch(err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if(!requests) return <h1>error</h1>;
        if(requests.length == 0) return <h1>No Requests Found</h1>;

    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-4xl text-white'>Requests</h1>
            {requests && requests.map(request => {
                const {_id, firstName, lastName, photoUrl, age, gender, about} = request.fromUserId;
                return (
                <div key={_id} className='flex justify-between items-center my-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
                    <div>
                        <img alt="connection profile photo" className='w-20 h-20 rounded-full' src={photoUrl} />
                    </div>
                    <div className='text-left mx-4'>
                        <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                        {age && gender && <p>{age + " " + gender}</p>}
                        <p>{about}</p>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2">Reject</button>
                        <button className="btn btn-secondary mx-2">Accept</button>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default Requests;