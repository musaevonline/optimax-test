export type LayoutItem = {
    w: number,
    h: number,
    x: number,
    y: number,
};
export type Layout = ReadonlyArray<LayoutItem>;
export type NewLayoutItem = Omit<LayoutItem, 'x' | 'y'>
export type ItemPosition = Pick<LayoutItem, 'x' | 'y'>

export const collides = (l1: LayoutItem, l2: LayoutItem): boolean => {
    if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
    if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
    if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
    if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
    return true; // boxes overlap
}

export const getFirstCollision = (
    layout: Layout,
    layoutItem: LayoutItem
): LayoutItem | undefined => {
    for (let i = 0, len = layout.length; i < len; i++) {
        if (collides(layout[i], layoutItem)) return layout[i];
    }
}

export const arrangeNewItem = (
    layout: Layout,
    layoutW: number,
    layoutH: number,
    newItem: NewLayoutItem
): ItemPosition | undefined => {
    for (let y = 0; y <= layoutH; y++) {
        for (let x = 0; x <= layoutW - newItem.w; x++) {
            if (!getFirstCollision(layout, { ...newItem, x, y })) {
                return { x, y }
            }
        }
    }
}
