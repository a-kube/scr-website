import full from '../../../public/full.png'

const Header = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <img src={full} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header