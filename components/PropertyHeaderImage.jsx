import Image from 'next/image'

const PropertyHeaderImage = ({ image }) => {
  return (
    // <Image
    //   src={`/images/properties/${image}`}
    //   alt="Property Image"
    //   layout="responsive"
    //   width={1920}
    //   height={1080}
    // />
    <section>
      <div className='m-auto container-xl'>
        <div className='grid grid-cols-1'>
          <Image
            src={`/images/properties/${image}`}
            alt=''
            className='object-cover h-[400px] w-full'
            height={0}
            width={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default PropertyHeaderImage
