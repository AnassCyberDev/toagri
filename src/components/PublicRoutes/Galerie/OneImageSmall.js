export const OneImageSmall = ({  image }) => {
    return (
      <div className="flexColCenter" style={{ position: 'relative' }}>
        <img
          src={image}
          height={400}
        //   width={300}
          style={{ margin: 10, borderRadius: 10, objectFit: 'cover',width:"90%" }}
          alt={'Image'}
        />

      </div>
    );
  };
  