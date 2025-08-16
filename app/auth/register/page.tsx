import RegisterForm from '@/components/auth/RegisterForm'
import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: 'CashTrackr - Crear Cuenta',
    description: 'Crea tu cuenta en CashTrackr',
}

export default function RegisterPage() {

    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crea una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <RegisterForm />

            <nav className='mt-10 flex flex-col space-y-4'>
                <Link href={'/auth/login'} className='text-center text-gray-500'>
                    ¿Ya tienes una cuenta? <span className='font-bold text-amber-500'>Iniciar sesión</span>
                </Link>
            </nav>
        </>
    )
}
