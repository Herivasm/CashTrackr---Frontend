import type { Metadata } from 'next'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'CashTrackr - Olvidé mi Contraseña',
    description: 'Reestablece tu contraseña en caso de olvidarla',
}

export default function ForgotPasswordPage() {

    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu Contraseña?</h1>
            <p className="text-3xl font-bold">aquí puedes <span className="text-amber-500">reestablecerla</span></p>

            <ForgotPasswordForm />

            <nav className='mt-10 flex flex-col space-y-4'>
                <Link href={'/auth/login'} className='text-center text-gray-500'>
                    ¿Ya tienes una cuenta? <span className='font-bold text-amber-500'>Iniciar sesión</span>
                </Link>
            </nav>
        </>
    )
}
