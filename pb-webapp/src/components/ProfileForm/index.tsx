import './index.css'
import ContentHeader from '../ContentHeader'

type Props = {
  nickname?: string,
  email: string,
  name?: string,
  avatarImage?: string,
  headerImage?: string,
}

const ProfileForm = ({nickname, email, name, avatarImage, headerImage}: Props) => {
  return (
    <>
      { /* Header */ }
      <ContentHeader> Profile </ContentHeader>

      { /* Nickname */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-nickname" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              Nickname
          </label></p>
        <p>
          <input
            id="profile-nickname"
            name="nickname"
            type="text"
            placeholder="Your Nick Name"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={nickname}
          />
        </p>
      </div>

      { /* email */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-email" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              email
          </label></p>
        <p>
          <input
            id="profile-email"
            name="email"
            type="text"
            placeholder="Your Email"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={email}
          />
        </p>
      </div>

      { /* Name */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-name" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              name
          </label></p>
        <p>
          <input
            id="profile-name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={name}
          />
        </p>
      </div>

      { /* avatar */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-avatarImage" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              Avatar
          </label></p>
        <p>
          <input
            id="profile-avatarImage"
            name="avatar"
            type="file"
            placeholder="Avatar Image"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={avatarImage}
          />
        </p>
      </div>

      { /* headerImage */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-headerImage" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              headerImage
          </label></p>
        <p>
          <input
            id="profile-headerImage"
            name="headerImage"
            type="file"
            placeholder="Header Image"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={headerImage}
          />
        </p>
      </div>

      

    </>
  )
}

export default ProfileForm
