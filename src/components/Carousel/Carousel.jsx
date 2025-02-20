import style from './Carousel.module.css';

export default function Slider() {
  const items = [
    {
      id: 1,
      name: 'item 1',
      text: 'item1',
    },
    {
      id: 2,
      name: 'item 2',
      text: 'item2',
    },
    {
      id: 3,
      name: 'item 3',
      text: 'item3',
    },
    {
      id: 4,
      name: 'item 4',
      text: 'item4',
    },
  ];

  return (
    <div className="container">
      <div className={`${style.carousel_container}`}>
        <div className={style.carousel_row}>
          {items.map((item) => (
            <div className="col-3" key={item.id}>
              <div id={item.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
