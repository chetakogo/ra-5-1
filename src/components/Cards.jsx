function Card(props) {
  return (
      <div className='card' style={{ width: '18rem' }}>
          {props.children}
          <div className='card-body'>
              <h5 className='card-title'>{props.title}</h5>
              <p className='card-text'>{props.text}</p>
              <button className="button"><a href={props.link} className='btn btn-primary'>
                  {props.linkName}
              </a></button>
          </div>
      </div>
  );
}

export default Card;