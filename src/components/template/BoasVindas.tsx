// https://unicode-table.com/en/1F44B/
import { useContext } from 'react'
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
export default function BoasVindas() {
    const { usuario } = useContext(AutenticacaoContext)

    return (
        <div className={`text-3xl font-black`}>
            Olá {' '}
            <span>
              {usuario?.nome?.split(' ')[0]}
            </span>{' '}
            👋
        </div>
    )
}