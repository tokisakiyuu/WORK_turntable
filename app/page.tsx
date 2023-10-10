'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const animationEnd = () => {
    setTimeout(() => {
      router.push('/form')
    }, 3000)
  }

  return (
    <main className='p-3'>
      <div className='relative h-[500px]'>
        <Image className='top-1/2 turntable-anime' src="/loto-p.png" alt='' fill style={{ objectFit: 'contain' }} onAnimationEnd={animationEnd} />
        <Image className='' src="/loto-z.png" alt='' fill style={{ objectFit: 'contain' }} />
      </div>
    </main>
  )
}
