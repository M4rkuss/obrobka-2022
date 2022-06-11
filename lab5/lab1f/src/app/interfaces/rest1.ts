import { Int1 } from '../interfaces/int1';
export interface Rest1 {
    _embedded: {
        paints: Int1[]
        },
        _links: {
        self: {
        href: string;
        },
        profile: {
        href: string;
        }
        },
        page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
        }

}