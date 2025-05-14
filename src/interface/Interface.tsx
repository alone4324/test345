/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import useGame from '../stores/store';
import Modal from './modal/Modal';
import HelpButton from './helpButton/HelpButton';
import './style.css';

const Interface = () => {
  const modal = useGame((state) => state.modal);
  const coins = useGame((state) => state.coins);
  const spins = useGame((state) => state.spins);

  return (
    <>
      {/* Help Button */}
      <HelpButton />

      {/* Modal */}
      {modal && <Modal />}

      {/* Logo */}
      <img className="logo" src="https://github.com/michaelkolesidis/cherry-charm/blob/6bd3030960888631bf289b06232a525128969956/Copy%20of%20Add%20a%20little%20bit%20of%20body%20text.png?raw=true" alt="Poppies Lottery" />

      <div className="interface">
        {/* Coins */}
        <div className="coins-section">
          <div className="coins-number">{coins}</div>
          <img className="coins-image" src="./images/coin.png" />
        </div>

        {/* Spins */}
        <div className="spins-section">
          <div className="spins-number">{spins}</div>
        </div>
      </div>
    </>
  );
};

export default Interface;