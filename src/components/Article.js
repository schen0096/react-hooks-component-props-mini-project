function Article({title, date="January 1, 1970", preview, minutes}){
    let emoji
    let number
    if (minutes < 30){
        emoji = '☕️'
        number = Math.ceil(minutes/5)
    } else{
        emoji = '🍱'
        number = Math.ceil(minutes/10)
    }
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {emoji.repeat(number)} {minutes} min read
            <p>{preview}</p>
        </article>
    )
}

export default Article;