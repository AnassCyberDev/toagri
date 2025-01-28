export const OneImageSmall = ({ description, image }) => {
    return (
      <div className="flexColCenter" style={{ position: 'relative' }}>
        <img
          src={image}
          height={300}
        //   width={300}
          style={{ margin: 10, borderRadius: 10, objectFit: 'cover',width:"90%" }}
          alt={description || 'Image'}
        />
        {description && (
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 40,
              color: 'white',
              backgroundColor: '#E75D0E',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            {description}
          </div>
        )}
      </div>
    );
  };
  