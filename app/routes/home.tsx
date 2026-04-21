import HeroSection from '~/components/Hero';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Lumiere Beauty salon' },
    {
      name: 'description',
      content:
        'Lumiere Beauty salon - Your destination for beautiful hair and skincare.',
    },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
