import type { Technologies } from '@models/technologies';
import { atom, type WritableAtom } from 'nanostores';

export const selectedTech: WritableAtom<Technologies | undefined> = atom(undefined);