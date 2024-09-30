
import { X } from 'lucide-react';
import './index.scss'
import { ReactNode } from 'react';
import { alertTypes } from '../../../types';

interface IProps {
    alerType: alertTypes
    icon: ReactNode
    title: string
    desc?: string
    children?: ReactNode
}

const Alert = ({alerType, icon, title, desc, children}: IProps) => {
    return (
        <div className={alerType}>
            <div className="alert-header">
                <div className="alert-title">
                    {icon}
                    <h3>{title}</h3>
                </div>
                <X className='icon-close'/>
            </div>
            {children? children : <p className="desc">{desc}</p>}
        </div>
    )
}

export default Alert