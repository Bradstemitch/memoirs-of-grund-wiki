import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import { StyledTab } from '../../utils/common';
import { Table, TableCell, TableRow } from '@mui/material';
import { WikiBar } from '../../utils/wiki';
import CreatureStatBlockDnD5e from '../_DnD5e/CreatureStatBlockDnD5e';
import CreatureStatBlockPath2e from '../_Path2e/CreatureStatBlockPath2e';
import WHF4eCreatureBlock from '../_WFRP4e/WFRP4eCreatureBlock';
import { CREATURE_Core } from '../../data/__DATA_Core';
import MagicItemBlockDnD5e from '../_DnD5e/MagicItemStatBlockDnD5e';

interface CreatureBoxProps {
  width: string;
  height: string;
  roleplaySystem: string;
  context: any;
}

function WikiPageBuilder(props: CreatureBoxProps) {
  const context = props.context;
  const system = context[props.roleplaySystem];
  const [value, setValue] = React.useState(
    context.fileLoc === `creatures` ? `Stats` : `Overview`
  );
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const header =
    (context.name.fore
      ? `${context.name.fore} ${context.name.sur}`
      : context.name) + (context.epitath ? `, ${context.epitath}` : ``);
  return (
    <div style={{ width: props.width, height: props.height }}>
      <h2>{header}</h2>
      {WikiBar(context)}
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {context.fileLoc === `creatures` && (
            <StyledTab label={`Stats`} value={`Stats`} />
          )}
          <StyledTab label={`Overview`} value={`Overview`} />
          {context.personality && (
            <StyledTab label={`Personality`} value={`Personality`} />
          )}
          {context.history && <StyledTab label={`History`} value={`History`} />}
          {context.abilities && (
            <StyledTab label={`Abilities`} value={`Abilities`} />
          )}
          {context.items && <StyledTab label={`Items`} value={`Items`} />}
          {context.relationships && (
            <StyledTab label={`Relationships`} value={`Relationships`} />
          )}
          {context.fileLoc === `magicItems` && (
            <StyledTab label={`In Game`} value={`In Game`} />
          )}
          {context.fileLoc === `magicItems` ||
            (context.fileLoc === `creatures` && (
              <StyledTab label={`Foundry`} value={`Foundry`} />
            ))}
        </TabList>

        <TabPanel value={`Stats`}>
          {context.fileLoc === `creatures` &&
            context.statlines.map((statline) => {
              switch (props.roleplaySystem) {
                case `DnD5e`:
                  return (
                    <div>
                      <CreatureStatBlockDnD5e creature={statline.DnD5e} />
                    </div>
                  )
                case `Path2e`:
                  return (
                    <div>
                      <CreatureStatBlockPath2e creature={statline} />
                    </div>
                  )
                case `WFRP4e`:
                  return (
                    <div>
                      <WHF4eCreatureBlock creature={statline} />
                    </div>
                  )
              }
            })
          }
        </TabPanel>

        <TabPanel value={`Overview`}>
          {context.summary && (
            <>
              {context.summary}
              <br />
            </>
          )}
          {context.appearance && (
            <>
              <h3>Appearance</h3>
              <>{context.appearance}</>
              <br />
            </>
          )}
          {(context.fileLoc === `magicItems`&& context.statlines) && (
            <>
              <MagicItemBlockDnD5e magicItem={context.statlines.DnD5e} />
              {/* <>{context.statlines[props.roleplaySystem.toString()].description}</> */}
              <br />
            </>
          )}
          {context.trivia && (
            <>
              <h3>Trivia</h3>
              <>{context.trivia}</>
              <br />
            </>
          )}
        </TabPanel>

        <TabPanel value={`In Game`}>
          {context.fileLoc === `magicItems` &&
            context[props.roleplaySystem] &&
            system.system &&
            system.system.gmdescription.value}
        </TabPanel>

        <TabPanel value={`History`}>
          <h3> History </h3>
          {context.history && context.history}
        </TabPanel>

        <TabPanel value={`Personality`}>
          <h3> Personality </h3>
          {context.personality && context.personality}
        </TabPanel>

        <TabPanel value={`Foundry`}>
          {context.fileLoc === `creatures` && context.statlines.map((statline) => {
            return (
              <div style={{ paddingBottom: `20px` }}>
                {context.fileLoc === `magicItems` ||
                  (context.fileLoc === `creatures` && (
                    <>
                      <div>{statline[props.roleplaySystem].name}</div>
                      <textarea
                        value={JSON.stringify(
                          statline[props.roleplaySystem],
                          null,
                          2
                        )}
                        readOnly
                        cols={120}
                        rows={15}
                      />
                    </>
                  ))}
              </div>
            );
          })}
        </TabPanel>
      </TabContext>
      <br />
      Tags: {context.tags}
    </div>
  );
}

export default WikiPageBuilder;
