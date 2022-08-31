import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  ScrollArea,
} from '@mantine/core';

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 41, 512, 1, 321,
    123, 312, 13, 213, 123, 132, 132, 132, 21];
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={(
        <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <ScrollArea type="never">
            <NavLink
              label="First parent link"
              childrenOffset={28}
            >
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Nested parent link" childrenOffset={28}>
                <NavLink label="First child link" />
                <NavLink label="Second child link" />
                <NavLink label="Third child link" />
              </NavLink>
            </NavLink>
            {data.map((item) => (
              <NavLink
                label={item.toString()}
              />
            ))}
          </ScrollArea>
        </Navbar>
              )}
      footer={(
        <Footer height={60} p="md">
          Application footer
        </Footer>
              )}
      header={(
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>每天</Text>
          </div>
        </Header>
              )}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
