import { Button } from 'react-bootstrap';
import styles from './ButtonIcon.module.scss'

import 'bootstrap-icons/font/bootstrap-icons.css'



type Props = {
    title : string;
    clasName? : string;
    disable?: boolean;
    mode? :'fill'|  "outline"; 
  
}


export default (props: Props) => {

    const classes = [styles.container, props.clasName ];

    if(props.disable) classes.push(styles.desabled);
    if(props.mode == 'outline')classes.push(styles.outline)
    else{classes.push(styles.fill)}

    return(
        <button disabled = {props.disable} className={classes.join(' ').trim()}>
            <i className="bi bi-person-fill-add"></i>
            {props.title}
        </button>
        
    )
}