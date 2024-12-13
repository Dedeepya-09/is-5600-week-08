const { create, get, list, edit } = require('../orders');
const orderData = require('../data/order1.json');
const productTestHelper = require('./test-utils/productTestHelper');


describe('Orders Module', () => {
    let createProduct;
    let createOrder;

    beforeAll(async () => {
        await productTestHelper.setupTestData();
        await productTestHelper.createTestOrders();
    });

    afterAll(async () => {
        await productTestHelper.cleanupTestData();
    });

    describe('list', () => {
        it('should list orders', async () => {
            const orders = await list();
            expect(orders.length).toBeGreaterThan(4);
        });
    });

    describe('create', () => {
        it('should create an order', async() => {
            //act
            createOrder = await create(orderData);

            //assert
            expect(createdOrder).toBeDefined();
            expect(createdOrder.buyerEmail).toBe(orderData.buyerEmail);
        })
    })

    describe('get', () => {
        it('should get an order by id', async() => {
            const order = await get(createdOrder._id);
            expect(order).toBeDefined();
            expect(order._id).toBe(createdOrder._id);
        })
    });

    describe('edit', () => {
        it('should edit an order', async () => {
            //act
            const change = { status: 'COMPLETED' };
            const editedOrder = await edit(createdOrder._id, change);

            //assert
            expected(editedOrder).toBeDefined();
            expect(editedOrder.status).toBe(change.status);
        
        })
    })
})