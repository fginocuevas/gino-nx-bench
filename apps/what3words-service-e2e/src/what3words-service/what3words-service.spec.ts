import axios from 'axios';

describe('GET /api/convert-to-3wa', () => {
  it('should return a message', async () => {
    const res = await axios.post(`/api/convert-to-3wa`, {
      data: {
        lat: 51.520847,
        lng: -0.195521,
      },
    });

    expect(res.status).toBe(200);
    // expect(res.data).to({ message: 'Hello API' });
  });
});
