console.log('mockFetch');

const fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve({
                status: 200,
                str: "OK",
            });
        }
    });
}
);
module.exports = fetch;
