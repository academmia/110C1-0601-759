
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="topmargin container">
          <h1 className="font-weight-400 center text-uppercase topmargin">mKommerce</h1>
          <p className="dark center display-6 m-v-1">Welcome!</p>
          <hr className="width-short center w-50" />
          <Link href="/about">
            <a className="d-inline-block m-l-3"> About </a>
          </Link>
          <Link href="/products" className="d-inline-block m-l-3">
            <a className="d-inline-block m-l-3"> Products </a>
          </Link>
          <Link href="/categories" className="d-inline-block m-l-3">
            <a className="d-inline-block m-l-3"> Categories </a>
          </Link>
          <Link href="/products/latest" className="d-inline-block m-l-3">
            <a className="d-inline-block m-l-3"> Latest Products </a>
          </Link>
          <Link href="/products/promo" className="d-inline-block m-l-3">
            <a className="d-inline-block m-l-3"> Promo Products </a>
          </Link>
        </div>

      </main>

    </div>
  )
}
