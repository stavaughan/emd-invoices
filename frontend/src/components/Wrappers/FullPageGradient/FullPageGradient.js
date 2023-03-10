import Classes from './FullPageGradient.module.css'

const FullPageGradient = (props) => {
    return (
        <section className={Classes['fp-bg-gradient']}>
            {props.children}
        </section>
    )
}

export default FullPageGradient
