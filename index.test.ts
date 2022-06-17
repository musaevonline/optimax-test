import { arrangeNewItem, Layout, NewLayoutItem } from './index'


const LAYOUT_W = 16
const LAYOUT_H = 8

const LAYOUT1: Layout = [
    { x: 0, y: 0, w: 6, h: 3 },
    { x: 6, y: 0, w: 6, h: 6 },
]
const LAYOUT2: Layout = [
    { x: 0, y: 0, w: 3, h: 7 },
    { x: 3, y: 0, w: 5, h: 2 },
    { x: 3, y: 2, w: 4, h: 2 },
    { x: 10, y: 0, w: 6, h: 6 },
]

const NEW_ITEM1: NewLayoutItem = {
    w: 4,
    h: 7,
}
const NEW_ITEM2: NewLayoutItem = {
    w: 12,
    h: 7,
}
const NEW_ITEM3: NewLayoutItem = {
    w: 15,
    h: 7,
}
const NEW_ITEM4: NewLayoutItem = {
    w: 2,
    h: 2,
}
const NEW_ITEM5: NewLayoutItem = {
    w: 3,
    h: 2,
}

test('Arrange item horizontally', () => {
    expect(arrangeNewItem(LAYOUT1, LAYOUT_W, LAYOUT_H, NEW_ITEM1)).toEqual({ x: 12, y: 0 });
    expect(arrangeNewItem(LAYOUT2, LAYOUT_W, LAYOUT_H, NEW_ITEM1)).toEqual({ x: 3, y: 4 });
    expect(arrangeNewItem(LAYOUT2, LAYOUT_W, LAYOUT_H, NEW_ITEM2)).toEqual({ x: 3, y: 6 });
    expect(arrangeNewItem(LAYOUT2, LAYOUT_W, LAYOUT_H, NEW_ITEM3)).toEqual({ x: 0, y: 7 });
    expect(arrangeNewItem(LAYOUT2, LAYOUT_W, LAYOUT_H, NEW_ITEM4)).toEqual({ x: 8, y: 0 });
    expect(arrangeNewItem(LAYOUT2, LAYOUT_W, LAYOUT_H, NEW_ITEM5)).toEqual({ x: 7, y: 2 });
});