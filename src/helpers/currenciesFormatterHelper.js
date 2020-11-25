import {isNull} from '@/helpers';

export function currencyFormatter(value) {
    try {
        if(isNull(value)) return;
        return Number(value).toLocaleString('ru', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: "USD"
        })
    } catch {
        return null;
    }
}