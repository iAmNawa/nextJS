// This is the Link API
import Link from 'next/link';
import MyLayout from './components/MyLayout';

const Index = () => (
  <MyLayout>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </MyLayout>
)

export default Index;
