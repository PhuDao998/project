import { ReactSVG } from 'react-svg';
import LoadingSvg from '../../../src/media/Spinner-1s-200px.svg'
export default function LoadingIcon (){
    return (
        <div  className='loading_icon_svg'>
            <ReactSVG src={LoadingSvg} />
        </div>
    )
}