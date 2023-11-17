 import styles from './Button.module.scss'


 type Props = {
    title : string;
    clasName?:string;
    // onClick : Function;
    disabled?:boolean;
    mode?: 'fill' | 'outline';
    
}



export default (props: Props) => {
    
    const classes = [styles.container, props.clasName];   //.join(' ').trim()

    if(props.disabled) classes.push(styles.disabled);
    if(props.mode == 'outline') classes.push(styles.outline)
    else {classes.push(styles.fill)} 



    return (
        <button disabled={props.disabled} className= {classes.join(' ').trim()}>
            {props.title}
        </button>
    )
}