import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="py-20 border-t border-cream-dark">
      <Container className="text-center">
        <p className="text-[11px] font-semibold tracking-[5px] uppercase text-ink mb-2">
          V O X &ensp; · &ensp; V E R B U M &ensp; · &ensp; F A B U L A
        </p>
        <p className="text-xs tracking-[3px] uppercase text-ink-fade mb-8">
          Voice &ensp;·&ensp; Word &ensp;·&ensp; Story
        </p>
        <a
          href="mailto:david@bookyourbrand.com"
          className="text-base text-gold hover:text-gold-dark transition-colors inline-block mb-8"
        >
          david@bookyourbrand.com
        </a>
        <p className="text-[10px] tracking-[2px] uppercase text-ink-fade">
          &copy; MMXXVI &ensp; David Lloyd Strauss &ensp;·&ensp; Book Your Brand
        </p>
      </Container>
    </footer>
  )
}
