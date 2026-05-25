import '../../styles/components/ui/button.css'
import type { ButtonProps } from '../../types/components'

export function PressButton({children,onClick,type="button"}:ButtonProps){


    return(
        <button type={type} onClick={onClick} className="mainButton"> {children}</button>
    )
}