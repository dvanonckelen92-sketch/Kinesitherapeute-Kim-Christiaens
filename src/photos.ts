import type { ImageMetadata } from 'astro';
import kimStairs from './assets/photos/kim-christiaens-bekkenbodemtherapeute-heers.jpg';
import consultModel from './assets/photos/uitleg-bekkenbodem-met-bekkenmodel.jpg';
import ultrasound from './assets/photos/echografie-onderbuik-praktijk.jpg';
import resistanceBand from './assets/photos/oefening-met-weerstandsband.jpg';
import guidingMovement from './assets/photos/begeleiding-bij-bewegen.jpg';
import pelvisModel from './assets/photos/anatomisch-bekkenmodel.jpg';
import practiceView from './assets/photos/uitzicht-praktijk-heers.jpg';
import toiletPosture from './assets/photos/toilethouding-met-opstapje.jpg';
import treatmentTable from './assets/photos/kim-christiaens-behandeltafel-praktijk.jpg';

/**
 * Foto's van Karolien Coenen, gekozen door Kim (nov. 2026).
 * De alt-tekst per taal staat in `photos` in src/i18n/nl.ts en fr.ts.
 * `position` bepaalt welk deel zichtbaar blijft als de foto bijgesneden wordt.
 */
export const PHOTOS = {
  kimStairs: { src: kimStairs, position: 'center 40%' },
  consultModel: { src: consultModel, position: 'center 45%' },
  ultrasound: { src: ultrasound, position: 'center 40%' },
  resistanceBand: { src: resistanceBand, position: '40% center' },
  guidingMovement: { src: guidingMovement, position: 'center 45%' },
  pelvisModel: { src: pelvisModel, position: 'center 55%' },
  practiceView: { src: practiceView, position: '45% center' },
  toiletPosture: { src: toiletPosture, position: '70% 60%' },
  treatmentTable: { src: treatmentTable, position: 'center 35%' },
} satisfies Record<string, { src: ImageMetadata; position: string }>;

export type PhotoKey = keyof typeof PHOTOS;
