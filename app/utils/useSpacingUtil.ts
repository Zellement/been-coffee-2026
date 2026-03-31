// Shared spacing value map
const SPACING_VALUES: Record<AcceptedSpacings, number> = {
    'spacing-none': 0,
    'spacing-8rem': 8,
    'spacing-20rem': 20,
    'spacing-30rem': 30,
    'spacing-40rem': 40
} as const

// Spacing difference to class map
const SPACING_CLASSES: Record<number, string> = {
    '-40': '-mt-10 lg:-mt-40!',
    '-30': '-mt-10 lg:-mt-30!',
    '-20': '-mt-10 lg:-mt-20!',
    '-8': '-mt-8!',
    8: 'mt-8!',
    20: 'mt-20!',
    30: 'mt-30!',
    40: 'mt-40!',
    '-32': 'lg:-mt-32!', // 40 - 8
    '-22': 'lg:-mt-22!', // 30 - 8
    '-12': 'lg:-mt-12!', // 20 - 8
    '-10': 'lg:-mt-10!', // 30 - 20
    32: 'mt-32!', // 40 - 8
    22: 'mt-22!', // 30 - 8
    12: 'mt-12!', // 20 - 8
    10: 'mt-10!' // 30 - 20
} as const

export const useSpacingUtil = () => {
    /**
     * Calculate the spacing difference between a block's desired spacing and the page's current spacing.
     * Returns a single margin class to apply the correct offset.
     */
    const getSpacing = (blokSpacing: AcceptedSpacings, pageSpacing: AcceptedSpacings): string => {
        if (!blokSpacing) {
            return ''
        }

        const blokValue = SPACING_VALUES[blokSpacing] || 0
        const pageValue = SPACING_VALUES[pageSpacing] || 0
        const difference = blokValue - pageValue

        if (difference === 0) {
            return ''
        }

        return SPACING_CLASSES[difference] || ''
    }

    /**
     * Get the vertical spacing class for a page layout.
     */
    const getPageSpacing = (pageSpacing: AcceptedSpacings): string => {
        if (!pageSpacing || pageSpacing === 'spacing-none') {
            return ''
        }

        const spacingMap: Record<AcceptedSpacings, string> = {
            'spacing-none': '',
            'spacing-8rem': 'space-y-8',
            'spacing-20rem': 'space-y-10 lg:space-y-20',
            'spacing-30rem': 'space-y-10 lg:space-y-30',
            'spacing-40rem': 'space-y-10 lg:space-y-40'
        }

        return spacingMap[pageSpacing] || ''
    }

    return {
        getSpacing,
        getPageSpacing
    }
}
