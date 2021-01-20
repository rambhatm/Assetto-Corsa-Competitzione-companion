import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper'

const Rcp = () => <Text>CP Server</Text>
const Rsimgrid = () => <Text>The Sim Grid</Text>

const League_bar = () => {
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'cpServer', title: 'CP Servers', icon: 'album' },
        { key: 'simgrid', title: 'Sim Grid', icon: 'history' }
    ])

    const renderScene = BottomNavigation.SceneMap({
        cpServer: Rcp,
        simgrid: Rsimgrid
    })
    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        ></BottomNavigation>
    )
}

export default League_bar