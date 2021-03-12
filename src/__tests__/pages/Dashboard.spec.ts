import api from '../../services/api'
import Dashboard from '../../pages/Dashboard/index'

describe('Dashboard testing', () => {
    it('Should be able to connect api', async () => {
        const response = new Dashboard();

        await api.get('users/')
        const users = response.data
        if (users) {
            return
        }
    })
})