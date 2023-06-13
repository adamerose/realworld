import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  MantineThemeOverride,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export function MantineWrapper({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const isDark = colorScheme === 'dark';
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (isDark ? 'light' : 'dark'));

  const myTheme: MantineThemeOverride = { colorScheme: colorScheme };

  console.log(myTheme);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <link
        rel="stylesheet"
        href={
          isDark
            ? 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
            : 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css'
        }
      />
      <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <span>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[6]}
            size="1.25rem"
            stroke={1.5}
          />
        }
      />
    </span>
  );
}
