import { Container } from '@/components/Container'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <p className="text-[11px] font-semibold tracking-[5px] uppercase text-gold animate-pulse">
          V O X &ensp; · &ensp; V E R B U M &ensp; · &ensp; F A B U L A
        </p>
      </Container>
    </div>
  )
}
