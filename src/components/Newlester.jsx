import React from 'react'
import "./Newsletter.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Newlester = () => {

    const handlesubmit = (e) => {
        e.preventDefault()
    }

    const [value, setValue] = useState('')
    
    const control = () => {
        if (value.includes('@') && value.includes('.')){
            notify1()
        }
        else {
            notify2()
        }
    }

    const notify1 = () => toast(
        toast.success(':) Kaydınız alındı.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    );
    const notify2 = () => toast(
        toast.error('Hatalı E-mail!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    );
    return (
        <div className='real'>
            <main class="container">
                <div class="newsletter">
                    <i class="icon fa fa-envelope-o"></i>
                    <h1 class="title">Leuch Store</h1>
                    <div class="txt-holder">
                        <p class="txt-primary">TOPTAN ALIMLAR İÇİN</p>
                        <p class="txt-secondary">TOPTAN ALIMLAR İÇİN BİZE MAİL ADRESİ BIRAKIN . EN KISA ZAMANDA SİZE DÖNÜŞ SAĞLANACAKTIR</p>
                    </div>
                    <form onSubmit={handlesubmit} action="">
                        <input onChange={(e) => {
                            setValue(e.target.value)
                        }} className='form-control' type="email" placeholder="Enter your email" />
                        <button onClick={control} class="btn" type="submit">Kayıt</button>
                        <ToastContainer />
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Newlester