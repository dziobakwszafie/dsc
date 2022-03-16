/* eslint-disable no-else-return */
/* eslint-disable react/jsx-no-bind */
import React, { FC, useState, useEffect } from 'react';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import ThemeModeSwitch from 'components/ThemeModeSwitch/ThemeModeSwitch';
import TooltipIcon from 'components/TooltipIcon/TooltipIcon';
import Link from 'components/Link/Link';

import table from 'utils/table';

const TypographyGradient = styled(Typography)`
  font-weight: 600;
  background: ${({ theme }) => theme.palette.gradients.grad1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Calculator: FC = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [boot, setBoot] = useState(null);
  const [skill, setSkill] = useState(0);
  const [age, setAge] = useState(0);
  const [final, setFinal] = useState(0);

  useEffect(() => {
    if (height !== null && weight !== null && boot !== null && skill !== null && age !== null) {
      const biggerOfTwo = Math.max(height, weight);
      const addedSkill = biggerOfTwo + skill + age;
      setFinal(table[addedSkill][boot]);
    }
  }, [height, weight, boot, skill, age]);

  const heightLabel = (value: number) => {
    const units = ['<148', '149-157', '158-166', '167-178', '179-194', '>195'];

    return `${units[value]}`;
  };

  const weightLabel = (value: number) => {
    const units = [
      '10-13',
      '14-17',
      '18-21',
      '22-25',
      '26-30',
      '31-35',
      '36-41',
      '42-48',
      '49-57',
      '58-66',
      '67-78',
      '79-94',
      '>95',
    ];

    return `${units[value]}`;
  };

  const bootLabel = (value: number) => {
    const units = ['<250', '251-270', '271-290', '291-310', '311-330', '>330'];

    return `${units[value]}`;
  };

  const skillLabel = (value: number) => {
    const units = ['średniozaawansowany', 'zaawansowany', 'expert'];

    if (value === -2) {
      return 'pierwszy raz';
    } else if (value === -1) {
      return 'początkujący';
    } else {
      return `${units[value]}`;
    }
  };

  const ageLabel = (value: number) => {
    if (value === -1) {
      return '<9 lub >50';
    } else {
      return '10-50';
    }
  };

  return (
    <Box>
      <Typography variant="h2" mb={2}>
        Kalkulator siły wypięcia wiązań narciarskich
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1">
          Podane wartości są orientacyjne i mogą odbiegać od rzeczywistości z uwagi na np. zużycie wiązania.
        </Typography>
        <Box minWidth={80} maxWidth={140} ml={1.5}>
          <ThemeModeSwitch />
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="body1">Wzrost [cm]</Typography>
        <Slider
          aria-label="Height"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
          getAriaValueText={heightLabel}
          valueLabelFormat={heightLabel}
          onChange={(event: any) => setHeight(event.target.value)}
        />
      </Box>

      <Box mt={2}>
        <Typography variant="body1">Waga [kg]</Typography>
        <Slider
          aria-label="Weight"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={12}
          getAriaValueText={weightLabel}
          valueLabelFormat={weightLabel}
          onChange={(event: any) => setWeight(event.target.value)}
        />
      </Box>

      <Box mt={2}>
        <Typography variant="body1">Długość skorupy buta [mm]</Typography>
        <Slider
          aria-label="Boot"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
          getAriaValueText={bootLabel}
          valueLabelFormat={bootLabel}
          onChange={(event: any) => setBoot(event.target.value)}
        />
      </Box>

      <Box mt={2}>
        <Box display="flex">
          <Typography variant="body1">Umiejętności</Typography>
          <Box ml={1}>
            <TooltipIcon>
              <Box>
                <Typography variant="body2" gutterBottom>
                  pierwszy raz - bardzo początkująca osoba
                </Typography>
                <Typography variant="body2" gutterBottom>
                  początkujący - osoba która była już parę razy ale wciąż się uczy
                </Typography>
                <Typography variant="body2" gutterBottom>
                  średniozaawansowany - taki ludź co jeździ już jakiś czas ale nie jakoś mega pewnie
                </Typography>
                <Typography variant="body2" gutterBottom>
                  zaawansowany - jeździ pewnie i dosyć szybko
                </Typography>
                <Typography variant="body2" gutterBottom>
                  expert - dzik co lata na pełnej
                </Typography>
              </Box>
            </TooltipIcon>
          </Box>
        </Box>
        <Slider
          aria-label="Skill"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={-2}
          max={2}
          getAriaValueText={skillLabel}
          valueLabelFormat={skillLabel}
          onChange={(event: any) => setSkill(event.target.value)}
        />
      </Box>

      <Box mt={2}>
        <Typography variant="body1">Wiek narciarza [lata]</Typography>
        <Slider
          aria-label="Boot"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={-1}
          max={0}
          getAriaValueText={ageLabel}
          valueLabelFormat={ageLabel}
          onChange={(event: any) => setAge(event.target.value)}
        />
      </Box>

      <TypographyGradient variant="h3" my={3} width="100%" align="center">
        <b>{final} DIN</b>
      </TypographyGradient>

      <Link href="https://github.com/dziobakwszafie" target="_blank">
        <Typography variant="body2" width="100%" align="center">
          author: dziobakwszafie 2022
        </Typography>
      </Link>
    </Box>
  );
};

export default Calculator;
